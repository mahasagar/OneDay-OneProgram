//#################################################
//structure 
struct node
{
 int data;
 struct node *next;
};

int insertfirst(struct node **head,int no)
{
 struct node *newnode=NULL;
 newnode=(struct node *)malloc(sizeof(struct node));

 if(NULL == newnode)
  return -1;

 memset(newnode,0,sizeof(struct node));
 newnode->next=NULL;
 newnode->data=no;
 if(NULL==*head)
  {
   *head=newnode;
  }
 else
  {
    newnode->next=(*head);
    *head=newnode;
  }
 return 1;
}

//####################################################

void display(struct node *head)
{
  
printf("\n\n");
  if(head == NULL)
    printf("\n list is empty");
  else
  {
   while(head!=NULL)
   {
    printf("| %d |->",head->data);
    head=head->next;
   }
  }
  printf("\n\n");

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

int insert_last(struct node **head,int no)
{

  struct node *newnode=(struct node *)malloc(sizeof(struct node));
  struct node *temp=(*head);
  newnode->data=no;
  newnode->next=NULL;

  if(*head==NULL)
    {
      (*head)=newnode;
    }
  else
   {
     while(temp->next!=NULL)
      {
       temp=temp->next;
      }
     temp->next=newnode;
   }
}

//##########################################################
int insert_at_pos(struct node **head,int no,int pos)
{
 int i=0;
 struct node *newnode=(struct node *)malloc(sizeof(struct node));
  newnode->data=no;
  newnode->next=NULL;
 struct node *temp=(*head);
  if(*head==NULL)
    (*head)=newnode;
  else
  {
  while(temp->next!=NULL)
  {
   i++;
   if((i)==(pos-1))
     break;
   temp=temp->next;
  }
  newnode->next=temp->next;
  temp->next=newnode;
  }  
}

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
int delete_first(struct node **head)
{
  struct node*temp=NULL;
  if(*head == NULL)
    printf("\n list is empty");
  else
  {
   temp=(*head);
   (*head)=temp->next;
   free(temp);
   printf("\n node deleted");
  }
}

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
int delete_last(struct node **head)
{
 struct node *temp=(*head);
 struct node *temp1=NULL;
 
 if(*head==NULL)
   printf("\n list is empty");
 else if((*head)->next==NULL)
    (*head)=NULL;
 else
 {
  
  while(temp->next!=NULL)
   { 
     temp1=temp;
     temp=temp->next;   
   }
   temp1->next=NULL;
   free(temp);
  }
} 
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
int check(struct node *head)
{
 if(head==NULL)
    return 1;
  else 
    return 0;
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
int delete_at_pos(struct node **head,int pos)
{
  int i=0;
  struct node* temp=(*head);
  struct node* temp1=NULL; 
  if(*head==NULL)
  {  
    printf("\n list is empty");
  }
  else if(pos==1)
  {
   delete_first(head);
  }
  else
  {
   for(i=1;i<(pos-1);i++)
    {
      temp=temp->next;
    }
  temp1=temp->next;
  temp->next=temp1->next;
  free(temp1);
  }
 
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
int count(struct node *head)
{ 
 int cnt;
 if(head==NULL)
 {
    printf("\n list is empty");
    return cnt;
 }
  while(head)
  {
    head=head->next;
    ++cnt;
   }
 return cnt;
 
}

//########################################################
int first_occur(struct node  *head,int no)
{
  int i=1;
  //struct node *temp=(head);
  if(head==NULL)
    {
       return 0;
     }
  else
 {  
  while(head!=NULL)
  { 
    i++;
    if(head->data==no)
     { return (i-1);
        break;
     }
    else
      head=head->next;
  }
 
   return -1;
 }
}
//##########################################################
int last_occur(struct node *head,int no)
{
 int i=0,pos=-1;
 if(head==NULL)
    return 1;
 else
 {
  while(head!=NULL)
  {
   i++;
    if(head->data==no)
      pos=i;
   head=head->next;
  }  
 return pos;
 }
}

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
int second_last(struct node *head,int no)
{
  int i=0,s=-1,j=0;
  if(head==NULL)
    return 1;
 else
 {
  while(head!=NULL)
  {
   i++;
    if(head->data==no)
     { s=j;
       j=i;
     }
   head=head->next;
  }  
 return s;
 }
}
 
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
int all_occur(struct node *head,int no)
{ 
  int i=0,s=-1,j=0;
  if(head==NULL)
    return i ;
 else
 {
  while(head!=NULL)
  {
    if(head->data==no)
     { 
        j++;
     }
   head=head->next;
  }  
  if(j==0)
    return s;
  else
    return j;
 }
}

//##########################################################i

int multi_insert(struct node **head)
{
  int i,no,j;
  (*head)=NULL;
  printf("\n how many element to be insert:");
  scanf("%d",&i);
  for(j=1;j<=i;j++)
   {
     printf("\n enter the data:");
     scanf("%d",&no);
     insert_last(head,no);
    }
 }
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
int concat(struct node **head1,struct node **head2)
{
 struct node *temp1=(*head1);
 struct node *temp2=(*head2);

 while(temp1->next!=NULL)
  {
     temp1=temp1->next;
  }
  while(temp2->next!=NULL)
  {
   temp1->next=temp2;
   temp1=temp1->next;
   temp2=temp2->next;
  }
  
}

//#######################################################
int concat_no(struct node **head1,struct node **head2,int no)
{
  struct node *temp1=(*head1);
  struct node *temp2=(*head2);

  while(temp1->next!=NULL)
  {
     temp1=temp1->next;
  }
  while(no==0)
   {
    temp1->next=temp2;
    temp1=temp1->next;
    temp2=temp2->next;
    no--;
   }
  temp1->next=NULL;

}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//14: concat last data from position
int concat_last_node(struct node *head1,struct node **head2,int no)
{
  struct node *temp=NULL;

}

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//16:
int llcopy(struct node **head1,struct node **head2)
{
  struct node *temp2= *head2;
  struct node *temp1= *head1;
  struct node *newnode;
  while(temp1!=NULL)
  {
   newnode=(struct node *)malloc(sizeof(struct node));
   newnode->data=temp1->data;

   newnode->next=NULL;
   if(*head2==NULL)
      (*head2)=temp2=newnode;
   else
   {
         temp2->next=newnode;
         temp2=temp2->next;
    }      
   temp1=temp1->next;
  }
}
////////////////////////////////
//////////////////////
//17: 
int copies(struct node *head1,struct node **head2,int no)
{
 struct node *temp2= *head2=NULL;
  struct node *temp1= head1;
  struct node *newnode;
 
 while(temp1!=NULL && no!=0 )
  {
   newnode=(struct node *)malloc(sizeof(struct node));
   newnode->data=temp1->data;
 
   newnode->next=NULL;
   if(*head2==NULL)
      (*head2)=temp2=newnode;
   else
   {
         
        
         temp2->next=newnode;
         temp2=temp2->next;
    }      
   temp1=temp1->next;
   no--;
  }


}

//
///////////////////////////////////////////////////////
//18:
int copy_no(struct node *head1,struct node **head2,int no)
{
  struct node *temp2= *head2;
  struct node *temp1= head1;
  struct node *newnode;
  int c=0,j=0,k=0;
  while(temp1!=NULL)
  { 
    c++;
     temp1=temp1->next;
  }
  k=c-no-1;
  while(temp1!=NULL)
  {
   if(j<k)
   { j++;
     temp1=temp1->next;
     k++;
   }
   else 
   newnode=(struct node *)malloc(sizeof(struct node));
   newnode->data=temp1->data;

   newnode->next=NULL;
   if(*head2==NULL)
      (*head2)=temp2=newnode;
   else
   {
         temp2->next=newnode;
         temp2=temp2->next;
    }      
   temp1=temp1->next;
   k++;
  }
}

/////////////////////////////////////////////////////////
//19:
int copy_19(struct node *head1,struct node **head2,int start,int end)
{int c=0;
 struct node *temp1=head1;
 struct node *temp2=NULL;
 struct node *newnode;
 while(temp1!=NULL)
 {
  c++;
  if(c>=start && c<=end)
  {
  newnode=(struct node*)malloc(sizeof(struct node));
  newnode->data=temp1->data;
  newnode->next=NULL;
    if(*head2==NULL)
      (*head2)=temp2=newnode;
   else
    {
         temp2->next=newnode;
         temp2=temp2->next;
    }
  }
  temp1=temp1->next;
  
 }
}
//:::::::::::::::::::::::::::::::::::::::::::::::
//20
int copy_20(struct node *head1,struct node **head2)
{
 int c=0,k=0;
 struct node *temp1=head1;
 struct node *temp2=NULL;
 struct node *newnode=NULL;
 while(temp1!=NULL)
 {
  c++;
  k=c%2;
  if(k==0)
  {
   newnode=(struct node *)malloc(sizeof(struct node));
   newnode->data=temp1->data;
   newnode->next=NULL;
     if(*head2==NULL)
      (*head2)=temp2=newnode;
   else
    {
         temp2->next=newnode;
         temp2=temp2->next;
    }
   }  
  temp1=temp1->next;
 }
}

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//21
int copy_21(struct node *head1,struct node **head2)
{
int c=0,sum=0;
 struct node *temp1=head1;
 struct node *temp2=(*head2)=NULL;
 struct node *newnode;
 
 while(temp1!=NULL)
 {
  c=temp1->data;
  
  while(c!=0)
   {
     sum=sum+(c%10);
     c=c/10;
   }
  if(sum%2==0)
  {
  newnode=(struct node*)malloc(sizeof(struct node));
  newnode->data=temp1->data;
  newnode->next=NULL;
   
   if(*head2==NULL)
      (*head2)=temp2=newnode;
   else
    {
         temp2->next=newnode;
         temp2=temp2->next;
    }
  }
  sum=0;
  temp1=temp1->next;
  
 }

}
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//22:
int copy_22(struct node *head1,struct node **head2)
{

 int c=0,f=0,i=2;
 struct node *temp1=head1;
 struct node *temp2=(*head2)=NULL;
 struct node *newnode;
 
 while(temp1!=NULL)
 {
  c=temp1->data;
  while(i<=c)
  { if(c%i==0)
     { f=1;
      break;}
    else
    {
      i++;}
  }
  i=2;
  if(f==0)
  {
  newnode=(struct node*)malloc(sizeof(struct node));
  newnode->data=temp1->data;
  newnode->next=NULL;
   
   if(*head2==NULL)
      (*head2)=temp2=newnode;
   else
    {
         temp2->next=newnode;
         temp2=temp2->next;
    }
  }
  
  temp1=temp1->next;
  
 }


}



//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
int left_shift(struct node **head,int pos)
{
 int i=0,j=pos;
 struct node*temp=*head;
 while(temp!=NULL && (pos)>0)
{
   temp=temp->next;
   printf("\n pos:%d",pos);
   pos--;
}
 (*head)=temp;
 while(j>0)
{  insert_last(head,0); j--;}
}
//#########################################################
int right_shift(struct node **head,int pos)
{
 int i;
 struct node*temp=*head;
  while(temp!=NULL && (pos)>0)
{
   temp=temp->next;
   printf("\n pos:%d",pos);
   pos--;
}
 temp->next=NULL;
  
}


//##############################################
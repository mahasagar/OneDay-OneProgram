#include<stdio.h>
#include<stdlib.h>
#include<malloc.h>
#include<string.h>

#include"link.h"
int main()
{
  int c,r,pos;
  int no,no1;
  struct node *first=NULL;
  struct node *second=NULL;
 
 do
 {
  printf("\n\n @@@@@@@@@@@ welcome to ds @@@@@@@@@@@");
  printf("\n 1: insert @ first ");
  printf("\n 2: insert @ last ");
  printf("\n 3: insert @ position ");
  printf("\n 4: display");
  printf("\n 5: delete @ first ");
  printf("\n 6: delete @ last ");
  printf("\n 7: delete @ position");
  printf("\n 8: first occurance"); 
  printf("\n 9: last occurance  "); 
  printf("\n10: second last occurance");
  printf("\n11: all occurance");

  printf("\n12: concat two list ");
  printf("\n13: concat @ position ");
  printf("\n14: concat last nodes ");
  printf("\n15: ");

  printf("\n16: copy in new list");
  printf("\n17: copies n first nodes ");
  printf("\n18: copies n last nodes");
  printf("\n19: range copies ");
  printf("\n20: copy alternate node");
  printf("\n21: copy node -data(digit) sum is even");
  printf("\n22: copy node- sum of digit- prime");

  printf("\n23: left shift");
  printf("\n24: right shift");
 


 
  printf("\n\n default: exit");
 
  printf("\n\n enter the choice:");
  scanf("%d",&c);
 
  switch(c)
  {
   case 1:
          printf("\n enter the data to insert:");
          scanf("%d",&no);
          r=insertfirst(&first,no);
          display(first);
          if(r==1)
            printf("\n\n data inserted");
          else
            printf("\n\n data NOT inserted");

         
          break;
 
   case 2: 
          printf("\n enter the data:");
          scanf("%d",&no);
          insert_last(&first,no);
          display(first);
          break;
    case 4:
           printf("\n");
           display(first);
           break;

     case 3:
           printf("\n enter the data:");
           scanf("%d",&no);
           printf("\n enter the position:");
           scanf("%d",&pos);
           insert_at_pos(&first,no,pos);
           display(first);
           break;
 
      case 5:
           display(first);
           delete_first(&first);
           display(first);
           break;

     case 6:
           display(first);
           delete_last(&first);
           display(first);
           break;
    case 7:
           display(first);
           printf("\n enter the position:");
           scanf("%d",&pos);
             
           delete_at_pos(&first,pos); 
           display(first);
           break;

     case 8:
           printf("\n enter the data to be search:");
           scanf("%d",&no);
           r=first_occur(first,no);
           if(r==0)
            printf("\n list is empty");
           else if(r==-1)
             printf("\n data not found");
           else
            printf("\n data found at %d position\n",r);
           break; 
 
      case 9:
           printf("\n enter the data to be search:");
           scanf("%d",&no);
           r=last_occur(first,no);
            if(r==0) 
              printf("\n list s empty");
            else if(r==-1)
              printf("\n data not found");
            else
             printf("\n data found at %d position\n",r);

             break; 

        case 10:
            printf("\n enter the data:");
            scanf("%d",&no);
            r=second_last(first,no);
             if(r==0)
             printf("\n list empty");
             else if(r==-1)
               printf("\n data not found");
             else
               printf("\n second last occurance:%d",r);
          
             break;

         case 11:
                
                printf("\n enter the data:");
                scanf("%d",&no);
                r=all_occur(first,no);
                if(r==0)
                 printf("\nlist is empty");
                else if(r==-1)
                 printf("\n data not found");
                else
                 printf("\n no of occurance:%d",r);
                 break;
 
         case 12:
                  multi_insert(&first);
                  multi_insert(&second);
                  printf("\n first list:");
                  display(first);
                  printf("\n second list:");
                  display(second); 
                  concat(&first,&second);
                  printf("\n the concated list:\n");
                  display(first);
                  break;

           case 13:

                   multi_insert(&first);
                   multi_insert(&second);
                   display(first);
                   display(second);
                   printf("\n enter how many to be concat:");
                   scanf("%d",&no);
                   concat_no(&first,&second,no);
                   display(first);
                   break;

   case 14:
        multi_insert(&first);
        display(first);
        multi_insert(&second);
        display(second);
        printf("\n enter the no of nodes:");
        scanf("%d",&no);
        concat_last_node(first,&second,no);
        display(second);
        
         break;
   case 15:
 



        break;
   case 16:
      multi_insert(&first);
      printf("\n the first list:");
      display(first);
      llcopy(&first,&second);
      printf("\n the second list");
      display(second);
       break; 
   case 17:
       multi_insert(&first);
       display(first);
       printf("\n how many nodes to be print:");
       scanf("%d",&no);
       copies(first,&second,no);
       display(second);
      
      break;

   case 18:
       multi_insert(&first);
       display(first);
       printf("\n how to be copied:");
       scanf("%d",&no);
   
       copy_no(first,&second,no);
       display(second);
       break;
 case 19:
      multi_insert(&first);
      display(first);
      printf("\n enter the start:");
      scanf("%d",&no);
      printf("\n enter the end:");
      scanf("%d",&no1);
      copy_19(first,&second,no,no1);
      display(second);
      break;
  case 20:
       multi_insert(&first);
       display(first);
       copy_20(first,&second);
       display(second);
       break;
   case 21:
       multi_insert(&first);
       display(first);
       copy_21(first,&second);
       display(second);
        break; 
   case 22:
         multi_insert(&first);
        display(first);
        copy_22(first,&second);
        display(second);
        break;

    case 23:
         multi_insert(&first);
         display(first);
         printf("\n enter the position to be shift:");
         scanf("%d",&no);
         left_shift(&first,no);
         display(first);
         break;
    case 24:
         multi_insert(&first);
         display(first);
         printf("\n enter the position to be shift:");
         scanf("%d",&no);
         right_shift(&first,no);
         display(first);
         break;
   default: 
           exit(0);

   }
  }while(1);
}



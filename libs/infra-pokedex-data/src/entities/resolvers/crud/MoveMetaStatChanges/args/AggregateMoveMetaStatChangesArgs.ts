import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaStatChangesOrderByWithRelationInput } from "../../../inputs/MoveMetaStatChangesOrderByWithRelationInput";
import { MoveMetaStatChangesWhereInput } from "../../../inputs/MoveMetaStatChangesWhereInput";
import { MoveMetaStatChangesWhereUniqueInput } from "../../../inputs/MoveMetaStatChangesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMoveMetaStatChangesArgs {
  @TypeGraphQL.Field(_type => MoveMetaStatChangesWhereInput, {
    nullable: true
  })
  where?: MoveMetaStatChangesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MoveMetaStatChangesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesWhereUniqueInput, {
    nullable: true
  })
  cursor?: MoveMetaStatChangesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

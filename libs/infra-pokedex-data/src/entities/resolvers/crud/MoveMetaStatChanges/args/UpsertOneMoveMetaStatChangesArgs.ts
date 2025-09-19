import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaStatChangesCreateInput } from "../../../inputs/MoveMetaStatChangesCreateInput";
import { MoveMetaStatChangesUpdateInput } from "../../../inputs/MoveMetaStatChangesUpdateInput";
import { MoveMetaStatChangesWhereUniqueInput } from "../../../inputs/MoveMetaStatChangesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMoveMetaStatChangesArgs {
  @TypeGraphQL.Field(_type => MoveMetaStatChangesWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaStatChangesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesCreateInput, {
    nullable: false
  })
  create!: MoveMetaStatChangesCreateInput;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesUpdateInput, {
    nullable: false
  })
  update!: MoveMetaStatChangesUpdateInput;
}

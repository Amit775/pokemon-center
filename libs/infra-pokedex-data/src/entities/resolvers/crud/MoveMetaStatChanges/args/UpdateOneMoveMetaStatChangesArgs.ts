import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaStatChangesUpdateInput } from "../../../inputs/MoveMetaStatChangesUpdateInput";
import { MoveMetaStatChangesWhereUniqueInput } from "../../../inputs/MoveMetaStatChangesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMoveMetaStatChangesArgs {
  @TypeGraphQL.Field(_type => MoveMetaStatChangesUpdateInput, {
    nullable: false
  })
  data!: MoveMetaStatChangesUpdateInput;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaStatChangesWhereUniqueInput;
}

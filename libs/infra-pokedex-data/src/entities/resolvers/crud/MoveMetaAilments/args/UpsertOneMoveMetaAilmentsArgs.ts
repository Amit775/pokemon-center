import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaAilmentsCreateInput } from "../../../inputs/MoveMetaAilmentsCreateInput";
import { MoveMetaAilmentsUpdateInput } from "../../../inputs/MoveMetaAilmentsUpdateInput";
import { MoveMetaAilmentsWhereUniqueInput } from "../../../inputs/MoveMetaAilmentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMoveMetaAilmentsArgs {
  @TypeGraphQL.Field(_type => MoveMetaAilmentsWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaAilmentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsCreateInput, {
    nullable: false
  })
  create!: MoveMetaAilmentsCreateInput;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsUpdateInput, {
    nullable: false
  })
  update!: MoveMetaAilmentsUpdateInput;
}

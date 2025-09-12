import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaAilmentsUpdateInput } from "../../../inputs/MoveMetaAilmentsUpdateInput";
import { MoveMetaAilmentsWhereUniqueInput } from "../../../inputs/MoveMetaAilmentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMoveMetaAilmentsArgs {
  @TypeGraphQL.Field(_type => MoveMetaAilmentsUpdateInput, {
    nullable: false
  })
  data!: MoveMetaAilmentsUpdateInput;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaAilmentsWhereUniqueInput;
}

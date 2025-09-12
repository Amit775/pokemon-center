import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaAilmentsCreateInput } from "../../../inputs/MoveMetaAilmentsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMoveMetaAilmentsArgs {
  @TypeGraphQL.Field(_type => MoveMetaAilmentsCreateInput, {
    nullable: false
  })
  data!: MoveMetaAilmentsCreateInput;
}

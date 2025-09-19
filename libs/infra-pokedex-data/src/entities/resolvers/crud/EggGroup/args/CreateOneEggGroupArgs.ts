import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EggGroupCreateInput } from "../../../inputs/EggGroupCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEggGroupArgs {
  @TypeGraphQL.Field(_type => EggGroupCreateInput, {
    nullable: false
  })
  data!: EggGroupCreateInput;
}

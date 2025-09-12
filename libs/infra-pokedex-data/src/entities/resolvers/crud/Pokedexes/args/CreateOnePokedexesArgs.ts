import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexesCreateInput } from "../../../inputs/PokedexesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokedexesArgs {
  @TypeGraphQL.Field(_type => PokedexesCreateInput, {
    nullable: false
  })
  data!: PokedexesCreateInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexCreateInput } from "../../../inputs/PokedexCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokedexArgs {
  @TypeGraphQL.Field(_type => PokedexCreateInput, {
    nullable: false
  })
  data!: PokedexCreateInput;
}

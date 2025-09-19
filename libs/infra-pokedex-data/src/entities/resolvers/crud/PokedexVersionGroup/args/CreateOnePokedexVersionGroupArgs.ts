import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexVersionGroupCreateInput } from "../../../inputs/PokedexVersionGroupCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokedexVersionGroupArgs {
  @TypeGraphQL.Field(_type => PokedexVersionGroupCreateInput, {
    nullable: false
  })
  data!: PokedexVersionGroupCreateInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonGameIndexUpdateInput } from "../../../inputs/PokemonGameIndexUpdateInput";
import { PokemonGameIndexWhereUniqueInput } from "../../../inputs/PokemonGameIndexWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonGameIndexArgs {
  @TypeGraphQL.Field(_type => PokemonGameIndexUpdateInput, {
    nullable: false
  })
  data!: PokemonGameIndexUpdateInput;

  @TypeGraphQL.Field(_type => PokemonGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonGameIndexWhereUniqueInput;
}

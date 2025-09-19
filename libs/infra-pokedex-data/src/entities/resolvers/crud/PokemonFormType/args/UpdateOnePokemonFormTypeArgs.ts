import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormTypeUpdateInput } from "../../../inputs/PokemonFormTypeUpdateInput";
import { PokemonFormTypeWhereUniqueInput } from "../../../inputs/PokemonFormTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonFormTypeArgs {
  @TypeGraphQL.Field(_type => PokemonFormTypeUpdateInput, {
    nullable: false
  })
  data!: PokemonFormTypeUpdateInput;

  @TypeGraphQL.Field(_type => PokemonFormTypeWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormTypeWhereUniqueInput;
}

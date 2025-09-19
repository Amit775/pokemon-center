import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormGenerationUpdateInput } from "../../../inputs/PokemonFormGenerationUpdateInput";
import { PokemonFormGenerationWhereUniqueInput } from "../../../inputs/PokemonFormGenerationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonFormGenerationArgs {
  @TypeGraphQL.Field(_type => PokemonFormGenerationUpdateInput, {
    nullable: false
  })
  data!: PokemonFormGenerationUpdateInput;

  @TypeGraphQL.Field(_type => PokemonFormGenerationWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormGenerationWhereUniqueInput;
}

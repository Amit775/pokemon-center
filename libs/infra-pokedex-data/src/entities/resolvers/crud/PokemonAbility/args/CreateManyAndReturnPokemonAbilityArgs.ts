import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonAbilityCreateManyInput } from "../../../inputs/PokemonAbilityCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPokemonAbilityArgs {
  @TypeGraphQL.Field(_type => [PokemonAbilityCreateManyInput], {
    nullable: false
  })
  data!: PokemonAbilityCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

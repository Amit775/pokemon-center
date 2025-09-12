import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonItemsCreateManyInput } from "../../../inputs/PokemonItemsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPokemonItemsArgs {
  @TypeGraphQL.Field(_type => [PokemonItemsCreateManyInput], {
    nullable: false
  })
  data!: PokemonItemsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

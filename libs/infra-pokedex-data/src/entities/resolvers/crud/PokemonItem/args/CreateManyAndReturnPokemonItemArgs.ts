import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonItemCreateManyInput } from "../../../inputs/PokemonItemCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPokemonItemArgs {
  @TypeGraphQL.Field(_type => [PokemonItemCreateManyInput], {
    nullable: false
  })
  data!: PokemonItemCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

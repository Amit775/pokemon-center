import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonSpeciesOrderByWithRelationInput } from "../../../inputs/PokemonSpeciesOrderByWithRelationInput";
import { PokemonSpeciesWhereInput } from "../../../inputs/PokemonSpeciesWhereInput";
import { PokemonSpeciesWhereUniqueInput } from "../../../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePokemonSpeciesArgs {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereInput, {
    nullable: true
  })
  where?: PokemonSpeciesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonSpeciesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonSpeciesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

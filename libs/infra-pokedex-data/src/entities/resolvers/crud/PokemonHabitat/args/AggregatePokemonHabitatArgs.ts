import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonHabitatOrderByWithRelationInput } from "../../../inputs/PokemonHabitatOrderByWithRelationInput";
import { PokemonHabitatWhereInput } from "../../../inputs/PokemonHabitatWhereInput";
import { PokemonHabitatWhereUniqueInput } from "../../../inputs/PokemonHabitatWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePokemonHabitatArgs {
  @TypeGraphQL.Field(_type => PokemonHabitatWhereInput, {
    nullable: true
  })
  where?: PokemonHabitatWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonHabitatOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonHabitatOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonHabitatWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

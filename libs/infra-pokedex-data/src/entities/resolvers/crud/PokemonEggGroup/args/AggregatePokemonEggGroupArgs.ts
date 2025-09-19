import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonEggGroupOrderByWithRelationInput } from "../../../inputs/PokemonEggGroupOrderByWithRelationInput";
import { PokemonEggGroupWhereInput } from "../../../inputs/PokemonEggGroupWhereInput";
import { PokemonEggGroupWhereUniqueInput } from "../../../inputs/PokemonEggGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePokemonEggGroupArgs {
  @TypeGraphQL.Field(_type => PokemonEggGroupWhereInput, {
    nullable: true
  })
  where?: PokemonEggGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonEggGroupOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonEggGroupWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

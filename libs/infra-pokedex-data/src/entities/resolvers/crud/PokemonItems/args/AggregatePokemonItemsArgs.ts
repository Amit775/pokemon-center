import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonItemsOrderByWithRelationInput } from "../../../inputs/PokemonItemsOrderByWithRelationInput";
import { PokemonItemsWhereInput } from "../../../inputs/PokemonItemsWhereInput";
import { PokemonItemsWhereUniqueInput } from "../../../inputs/PokemonItemsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePokemonItemsArgs {
  @TypeGraphQL.Field(_type => PokemonItemsWhereInput, {
    nullable: true
  })
  where?: PokemonItemsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonItemsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonItemsWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonItemsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

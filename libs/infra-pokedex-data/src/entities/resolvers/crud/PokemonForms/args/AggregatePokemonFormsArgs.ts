import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormsOrderByWithRelationInput } from "../../../inputs/PokemonFormsOrderByWithRelationInput";
import { PokemonFormsWhereInput } from "../../../inputs/PokemonFormsWhereInput";
import { PokemonFormsWhereUniqueInput } from "../../../inputs/PokemonFormsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePokemonFormsArgs {
  @TypeGraphQL.Field(_type => PokemonFormsWhereInput, {
    nullable: true
  })
  where?: PokemonFormsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonFormsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonFormsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

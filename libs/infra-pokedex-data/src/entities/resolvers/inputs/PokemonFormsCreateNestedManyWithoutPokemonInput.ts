import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsCreateManyPokemonInputEnvelope } from "../inputs/PokemonFormsCreateManyPokemonInputEnvelope";
import { PokemonFormsCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonFormsCreateOrConnectWithoutPokemonInput";
import { PokemonFormsCreateWithoutPokemonInput } from "../inputs/PokemonFormsCreateWithoutPokemonInput";
import { PokemonFormsWhereUniqueInput } from "../inputs/PokemonFormsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormsCreateNestedManyWithoutPokemonInput", {})
export class PokemonFormsCreateNestedManyWithoutPokemonInput {
  @TypeGraphQL.Field(_type => [PokemonFormsCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonFormsCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormsCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonFormsCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonFormsCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormsWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonFormsWhereUniqueInput[] | undefined;
}

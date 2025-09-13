import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsCreateManyVersionGroupInputEnvelope } from "../inputs/PokemonFormsCreateManyVersionGroupInputEnvelope";
import { PokemonFormsCreateOrConnectWithoutVersionGroupInput } from "../inputs/PokemonFormsCreateOrConnectWithoutVersionGroupInput";
import { PokemonFormsCreateWithoutVersionGroupInput } from "../inputs/PokemonFormsCreateWithoutVersionGroupInput";
import { PokemonFormsWhereUniqueInput } from "../inputs/PokemonFormsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormsCreateNestedManyWithoutVersionGroupInput", {})
export class PokemonFormsCreateNestedManyWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => [PokemonFormsCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: PokemonFormsCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormsCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: PokemonFormsCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonFormsCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormsWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonFormsWhereUniqueInput[] | undefined;
}

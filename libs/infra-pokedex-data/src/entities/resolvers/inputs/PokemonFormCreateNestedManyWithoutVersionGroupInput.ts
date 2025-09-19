import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormCreateManyVersionGroupInputEnvelope } from "../inputs/PokemonFormCreateManyVersionGroupInputEnvelope";
import { PokemonFormCreateOrConnectWithoutVersionGroupInput } from "../inputs/PokemonFormCreateOrConnectWithoutVersionGroupInput";
import { PokemonFormCreateWithoutVersionGroupInput } from "../inputs/PokemonFormCreateWithoutVersionGroupInput";
import { PokemonFormWhereUniqueInput } from "../inputs/PokemonFormWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormCreateNestedManyWithoutVersionGroupInput", {})
export class PokemonFormCreateNestedManyWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => [PokemonFormCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: PokemonFormCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: PokemonFormCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonFormCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonFormWhereUniqueInput[] | undefined;
}

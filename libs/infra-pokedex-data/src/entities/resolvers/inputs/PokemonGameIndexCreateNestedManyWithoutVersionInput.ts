import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndexCreateManyVersionInputEnvelope } from "../inputs/PokemonGameIndexCreateManyVersionInputEnvelope";
import { PokemonGameIndexCreateOrConnectWithoutVersionInput } from "../inputs/PokemonGameIndexCreateOrConnectWithoutVersionInput";
import { PokemonGameIndexCreateWithoutVersionInput } from "../inputs/PokemonGameIndexCreateWithoutVersionInput";
import { PokemonGameIndexWhereUniqueInput } from "../inputs/PokemonGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("PokemonGameIndexCreateNestedManyWithoutVersionInput", {})
export class PokemonGameIndexCreateNestedManyWithoutVersionInput {
  @TypeGraphQL.Field(_type => [PokemonGameIndexCreateWithoutVersionInput], {
    nullable: true
  })
  create?: PokemonGameIndexCreateWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexCreateOrConnectWithoutVersionInput], {
    nullable: true
  })
  connectOrCreate?: PokemonGameIndexCreateOrConnectWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndexCreateManyVersionInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonGameIndexCreateManyVersionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonGameIndexWhereUniqueInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndicesCreateManyVersionInputEnvelope } from "../inputs/PokemonGameIndicesCreateManyVersionInputEnvelope";
import { PokemonGameIndicesCreateOrConnectWithoutVersionInput } from "../inputs/PokemonGameIndicesCreateOrConnectWithoutVersionInput";
import { PokemonGameIndicesCreateWithoutVersionInput } from "../inputs/PokemonGameIndicesCreateWithoutVersionInput";
import { PokemonGameIndicesWhereUniqueInput } from "../inputs/PokemonGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonGameIndicesCreateNestedManyWithoutVersionInput", {})
export class PokemonGameIndicesCreateNestedManyWithoutVersionInput {
  @TypeGraphQL.Field(_type => [PokemonGameIndicesCreateWithoutVersionInput], {
    nullable: true
  })
  create?: PokemonGameIndicesCreateWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesCreateOrConnectWithoutVersionInput], {
    nullable: true
  })
  connectOrCreate?: PokemonGameIndicesCreateOrConnectWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndicesCreateManyVersionInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonGameIndicesCreateManyVersionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonGameIndicesWhereUniqueInput[] | undefined;
}

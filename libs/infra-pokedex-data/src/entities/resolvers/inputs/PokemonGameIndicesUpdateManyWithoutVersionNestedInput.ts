import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndicesCreateManyVersionInputEnvelope } from "../inputs/PokemonGameIndicesCreateManyVersionInputEnvelope";
import { PokemonGameIndicesCreateOrConnectWithoutVersionInput } from "../inputs/PokemonGameIndicesCreateOrConnectWithoutVersionInput";
import { PokemonGameIndicesCreateWithoutVersionInput } from "../inputs/PokemonGameIndicesCreateWithoutVersionInput";
import { PokemonGameIndicesScalarWhereInput } from "../inputs/PokemonGameIndicesScalarWhereInput";
import { PokemonGameIndicesUpdateManyWithWhereWithoutVersionInput } from "../inputs/PokemonGameIndicesUpdateManyWithWhereWithoutVersionInput";
import { PokemonGameIndicesUpdateWithWhereUniqueWithoutVersionInput } from "../inputs/PokemonGameIndicesUpdateWithWhereUniqueWithoutVersionInput";
import { PokemonGameIndicesUpsertWithWhereUniqueWithoutVersionInput } from "../inputs/PokemonGameIndicesUpsertWithWhereUniqueWithoutVersionInput";
import { PokemonGameIndicesWhereUniqueInput } from "../inputs/PokemonGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonGameIndicesUpdateManyWithoutVersionNestedInput", {})
export class PokemonGameIndicesUpdateManyWithoutVersionNestedInput {
  @TypeGraphQL.Field(_type => [PokemonGameIndicesCreateWithoutVersionInput], {
    nullable: true
  })
  create?: PokemonGameIndicesCreateWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesCreateOrConnectWithoutVersionInput], {
    nullable: true
  })
  connectOrCreate?: PokemonGameIndicesCreateOrConnectWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesUpsertWithWhereUniqueWithoutVersionInput], {
    nullable: true
  })
  upsert?: PokemonGameIndicesUpsertWithWhereUniqueWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndicesCreateManyVersionInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonGameIndicesCreateManyVersionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonGameIndicesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesUpdateWithWhereUniqueWithoutVersionInput], {
    nullable: true
  })
  update?: PokemonGameIndicesUpdateWithWhereUniqueWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesUpdateManyWithWhereWithoutVersionInput], {
    nullable: true
  })
  updateMany?: PokemonGameIndicesUpdateManyWithWhereWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonGameIndicesScalarWhereInput[] | undefined;
}

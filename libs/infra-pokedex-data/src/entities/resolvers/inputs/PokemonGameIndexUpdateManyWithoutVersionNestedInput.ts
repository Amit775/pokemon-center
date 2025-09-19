import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndexCreateManyVersionInputEnvelope } from "../inputs/PokemonGameIndexCreateManyVersionInputEnvelope";
import { PokemonGameIndexCreateOrConnectWithoutVersionInput } from "../inputs/PokemonGameIndexCreateOrConnectWithoutVersionInput";
import { PokemonGameIndexCreateWithoutVersionInput } from "../inputs/PokemonGameIndexCreateWithoutVersionInput";
import { PokemonGameIndexScalarWhereInput } from "../inputs/PokemonGameIndexScalarWhereInput";
import { PokemonGameIndexUpdateManyWithWhereWithoutVersionInput } from "../inputs/PokemonGameIndexUpdateManyWithWhereWithoutVersionInput";
import { PokemonGameIndexUpdateWithWhereUniqueWithoutVersionInput } from "../inputs/PokemonGameIndexUpdateWithWhereUniqueWithoutVersionInput";
import { PokemonGameIndexUpsertWithWhereUniqueWithoutVersionInput } from "../inputs/PokemonGameIndexUpsertWithWhereUniqueWithoutVersionInput";
import { PokemonGameIndexWhereUniqueInput } from "../inputs/PokemonGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("PokemonGameIndexUpdateManyWithoutVersionNestedInput", {})
export class PokemonGameIndexUpdateManyWithoutVersionNestedInput {
  @TypeGraphQL.Field(_type => [PokemonGameIndexCreateWithoutVersionInput], {
    nullable: true
  })
  create?: PokemonGameIndexCreateWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexCreateOrConnectWithoutVersionInput], {
    nullable: true
  })
  connectOrCreate?: PokemonGameIndexCreateOrConnectWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexUpsertWithWhereUniqueWithoutVersionInput], {
    nullable: true
  })
  upsert?: PokemonGameIndexUpsertWithWhereUniqueWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndexCreateManyVersionInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonGameIndexCreateManyVersionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonGameIndexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexUpdateWithWhereUniqueWithoutVersionInput], {
    nullable: true
  })
  update?: PokemonGameIndexUpdateWithWhereUniqueWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexUpdateManyWithWhereWithoutVersionInput], {
    nullable: true
  })
  updateMany?: PokemonGameIndexUpdateManyWithWhereWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonGameIndexScalarWhereInput[] | undefined;
}

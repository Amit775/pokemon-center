import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemCreateManyVersionInputEnvelope } from "../inputs/PokemonItemCreateManyVersionInputEnvelope";
import { PokemonItemCreateOrConnectWithoutVersionInput } from "../inputs/PokemonItemCreateOrConnectWithoutVersionInput";
import { PokemonItemCreateWithoutVersionInput } from "../inputs/PokemonItemCreateWithoutVersionInput";
import { PokemonItemScalarWhereInput } from "../inputs/PokemonItemScalarWhereInput";
import { PokemonItemUpdateManyWithWhereWithoutVersionInput } from "../inputs/PokemonItemUpdateManyWithWhereWithoutVersionInput";
import { PokemonItemUpdateWithWhereUniqueWithoutVersionInput } from "../inputs/PokemonItemUpdateWithWhereUniqueWithoutVersionInput";
import { PokemonItemUpsertWithWhereUniqueWithoutVersionInput } from "../inputs/PokemonItemUpsertWithWhereUniqueWithoutVersionInput";
import { PokemonItemWhereUniqueInput } from "../inputs/PokemonItemWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemUpdateManyWithoutVersionNestedInput", {})
export class PokemonItemUpdateManyWithoutVersionNestedInput {
  @TypeGraphQL.Field(_type => [PokemonItemCreateWithoutVersionInput], {
    nullable: true
  })
  create?: PokemonItemCreateWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemCreateOrConnectWithoutVersionInput], {
    nullable: true
  })
  connectOrCreate?: PokemonItemCreateOrConnectWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemUpsertWithWhereUniqueWithoutVersionInput], {
    nullable: true
  })
  upsert?: PokemonItemUpsertWithWhereUniqueWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonItemCreateManyVersionInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonItemCreateManyVersionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemUpdateWithWhereUniqueWithoutVersionInput], {
    nullable: true
  })
  update?: PokemonItemUpdateWithWhereUniqueWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemUpdateManyWithWhereWithoutVersionInput], {
    nullable: true
  })
  updateMany?: PokemonItemUpdateManyWithWhereWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonItemScalarWhereInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemsCreateManyVersionInputEnvelope } from "../inputs/PokemonItemsCreateManyVersionInputEnvelope";
import { PokemonItemsCreateOrConnectWithoutVersionInput } from "../inputs/PokemonItemsCreateOrConnectWithoutVersionInput";
import { PokemonItemsCreateWithoutVersionInput } from "../inputs/PokemonItemsCreateWithoutVersionInput";
import { PokemonItemsScalarWhereInput } from "../inputs/PokemonItemsScalarWhereInput";
import { PokemonItemsUpdateManyWithWhereWithoutVersionInput } from "../inputs/PokemonItemsUpdateManyWithWhereWithoutVersionInput";
import { PokemonItemsUpdateWithWhereUniqueWithoutVersionInput } from "../inputs/PokemonItemsUpdateWithWhereUniqueWithoutVersionInput";
import { PokemonItemsUpsertWithWhereUniqueWithoutVersionInput } from "../inputs/PokemonItemsUpsertWithWhereUniqueWithoutVersionInput";
import { PokemonItemsWhereUniqueInput } from "../inputs/PokemonItemsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemsUpdateManyWithoutVersionNestedInput", {})
export class PokemonItemsUpdateManyWithoutVersionNestedInput {
  @TypeGraphQL.Field(_type => [PokemonItemsCreateWithoutVersionInput], {
    nullable: true
  })
  create?: PokemonItemsCreateWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsCreateOrConnectWithoutVersionInput], {
    nullable: true
  })
  connectOrCreate?: PokemonItemsCreateOrConnectWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsUpsertWithWhereUniqueWithoutVersionInput], {
    nullable: true
  })
  upsert?: PokemonItemsUpsertWithWhereUniqueWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonItemsCreateManyVersionInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonItemsCreateManyVersionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonItemsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonItemsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonItemsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonItemsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsUpdateWithWhereUniqueWithoutVersionInput], {
    nullable: true
  })
  update?: PokemonItemsUpdateWithWhereUniqueWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsUpdateManyWithWhereWithoutVersionInput], {
    nullable: true
  })
  updateMany?: PokemonItemsUpdateManyWithWhereWithoutVersionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonItemsScalarWhereInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainCreateManyBabyTriggerItemInputEnvelope } from "../inputs/EvolutionChainCreateManyBabyTriggerItemInputEnvelope";
import { EvolutionChainCreateOrConnectWithoutBabyTriggerItemInput } from "../inputs/EvolutionChainCreateOrConnectWithoutBabyTriggerItemInput";
import { EvolutionChainCreateWithoutBabyTriggerItemInput } from "../inputs/EvolutionChainCreateWithoutBabyTriggerItemInput";
import { EvolutionChainScalarWhereInput } from "../inputs/EvolutionChainScalarWhereInput";
import { EvolutionChainUpdateManyWithWhereWithoutBabyTriggerItemInput } from "../inputs/EvolutionChainUpdateManyWithWhereWithoutBabyTriggerItemInput";
import { EvolutionChainUpdateWithWhereUniqueWithoutBabyTriggerItemInput } from "../inputs/EvolutionChainUpdateWithWhereUniqueWithoutBabyTriggerItemInput";
import { EvolutionChainUpsertWithWhereUniqueWithoutBabyTriggerItemInput } from "../inputs/EvolutionChainUpsertWithWhereUniqueWithoutBabyTriggerItemInput";
import { EvolutionChainWhereUniqueInput } from "../inputs/EvolutionChainWhereUniqueInput";

@TypeGraphQL.InputType("EvolutionChainUpdateManyWithoutBabyTriggerItemNestedInput", {})
export class EvolutionChainUpdateManyWithoutBabyTriggerItemNestedInput {
  @TypeGraphQL.Field(_type => [EvolutionChainCreateWithoutBabyTriggerItemInput], {
    nullable: true
  })
  create?: EvolutionChainCreateWithoutBabyTriggerItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainCreateOrConnectWithoutBabyTriggerItemInput], {
    nullable: true
  })
  connectOrCreate?: EvolutionChainCreateOrConnectWithoutBabyTriggerItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainUpsertWithWhereUniqueWithoutBabyTriggerItemInput], {
    nullable: true
  })
  upsert?: EvolutionChainUpsertWithWhereUniqueWithoutBabyTriggerItemInput[] | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainCreateManyBabyTriggerItemInputEnvelope, {
    nullable: true
  })
  createMany?: EvolutionChainCreateManyBabyTriggerItemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainWhereUniqueInput], {
    nullable: true
  })
  set?: EvolutionChainWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainWhereUniqueInput], {
    nullable: true
  })
  disconnect?: EvolutionChainWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainWhereUniqueInput], {
    nullable: true
  })
  delete?: EvolutionChainWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainWhereUniqueInput], {
    nullable: true
  })
  connect?: EvolutionChainWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainUpdateWithWhereUniqueWithoutBabyTriggerItemInput], {
    nullable: true
  })
  update?: EvolutionChainUpdateWithWhereUniqueWithoutBabyTriggerItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainUpdateManyWithWhereWithoutBabyTriggerItemInput], {
    nullable: true
  })
  updateMany?: EvolutionChainUpdateManyWithWhereWithoutBabyTriggerItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EvolutionChainScalarWhereInput[] | undefined;
}

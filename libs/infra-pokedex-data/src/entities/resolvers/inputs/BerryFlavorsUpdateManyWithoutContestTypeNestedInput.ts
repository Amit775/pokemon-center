import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsCreateManyContestTypeInputEnvelope } from "../inputs/BerryFlavorsCreateManyContestTypeInputEnvelope";
import { BerryFlavorsCreateOrConnectWithoutContestTypeInput } from "../inputs/BerryFlavorsCreateOrConnectWithoutContestTypeInput";
import { BerryFlavorsCreateWithoutContestTypeInput } from "../inputs/BerryFlavorsCreateWithoutContestTypeInput";
import { BerryFlavorsScalarWhereInput } from "../inputs/BerryFlavorsScalarWhereInput";
import { BerryFlavorsUpdateManyWithWhereWithoutContestTypeInput } from "../inputs/BerryFlavorsUpdateManyWithWhereWithoutContestTypeInput";
import { BerryFlavorsUpdateWithWhereUniqueWithoutContestTypeInput } from "../inputs/BerryFlavorsUpdateWithWhereUniqueWithoutContestTypeInput";
import { BerryFlavorsUpsertWithWhereUniqueWithoutContestTypeInput } from "../inputs/BerryFlavorsUpsertWithWhereUniqueWithoutContestTypeInput";
import { BerryFlavorsWhereUniqueInput } from "../inputs/BerryFlavorsWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorsUpdateManyWithoutContestTypeNestedInput", {})
export class BerryFlavorsUpdateManyWithoutContestTypeNestedInput {
  @TypeGraphQL.Field(_type => [BerryFlavorsCreateWithoutContestTypeInput], {
    nullable: true
  })
  create?: BerryFlavorsCreateWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsCreateOrConnectWithoutContestTypeInput], {
    nullable: true
  })
  connectOrCreate?: BerryFlavorsCreateOrConnectWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsUpsertWithWhereUniqueWithoutContestTypeInput], {
    nullable: true
  })
  upsert?: BerryFlavorsUpsertWithWhereUniqueWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorsCreateManyContestTypeInputEnvelope, {
    nullable: true
  })
  createMany?: BerryFlavorsCreateManyContestTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsWhereUniqueInput], {
    nullable: true
  })
  set?: BerryFlavorsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BerryFlavorsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsWhereUniqueInput], {
    nullable: true
  })
  delete?: BerryFlavorsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsWhereUniqueInput], {
    nullable: true
  })
  connect?: BerryFlavorsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsUpdateWithWhereUniqueWithoutContestTypeInput], {
    nullable: true
  })
  update?: BerryFlavorsUpdateWithWhereUniqueWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsUpdateManyWithWhereWithoutContestTypeInput], {
    nullable: true
  })
  updateMany?: BerryFlavorsUpdateManyWithWhereWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BerryFlavorsScalarWhereInput[] | undefined;
}

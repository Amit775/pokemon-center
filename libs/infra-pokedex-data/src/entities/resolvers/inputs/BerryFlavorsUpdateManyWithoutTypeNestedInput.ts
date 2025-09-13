import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsCreateManyTypeInputEnvelope } from "../inputs/BerryFlavorsCreateManyTypeInputEnvelope";
import { BerryFlavorsCreateOrConnectWithoutTypeInput } from "../inputs/BerryFlavorsCreateOrConnectWithoutTypeInput";
import { BerryFlavorsCreateWithoutTypeInput } from "../inputs/BerryFlavorsCreateWithoutTypeInput";
import { BerryFlavorsScalarWhereInput } from "../inputs/BerryFlavorsScalarWhereInput";
import { BerryFlavorsUpdateManyWithWhereWithoutTypeInput } from "../inputs/BerryFlavorsUpdateManyWithWhereWithoutTypeInput";
import { BerryFlavorsUpdateWithWhereUniqueWithoutTypeInput } from "../inputs/BerryFlavorsUpdateWithWhereUniqueWithoutTypeInput";
import { BerryFlavorsUpsertWithWhereUniqueWithoutTypeInput } from "../inputs/BerryFlavorsUpsertWithWhereUniqueWithoutTypeInput";
import { BerryFlavorsWhereUniqueInput } from "../inputs/BerryFlavorsWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorsUpdateManyWithoutTypeNestedInput", {})
export class BerryFlavorsUpdateManyWithoutTypeNestedInput {
  @TypeGraphQL.Field(_type => [BerryFlavorsCreateWithoutTypeInput], {
    nullable: true
  })
  create?: BerryFlavorsCreateWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsCreateOrConnectWithoutTypeInput], {
    nullable: true
  })
  connectOrCreate?: BerryFlavorsCreateOrConnectWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsUpsertWithWhereUniqueWithoutTypeInput], {
    nullable: true
  })
  upsert?: BerryFlavorsUpsertWithWhereUniqueWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorsCreateManyTypeInputEnvelope, {
    nullable: true
  })
  createMany?: BerryFlavorsCreateManyTypeInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [BerryFlavorsUpdateWithWhereUniqueWithoutTypeInput], {
    nullable: true
  })
  update?: BerryFlavorsUpdateWithWhereUniqueWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsUpdateManyWithWhereWithoutTypeInput], {
    nullable: true
  })
  updateMany?: BerryFlavorsUpdateManyWithWhereWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BerryFlavorsScalarWhereInput[] | undefined;
}

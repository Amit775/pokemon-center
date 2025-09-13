import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsCreateManyBerryInputEnvelope } from "../inputs/BerryFlavorsCreateManyBerryInputEnvelope";
import { BerryFlavorsCreateOrConnectWithoutBerryInput } from "../inputs/BerryFlavorsCreateOrConnectWithoutBerryInput";
import { BerryFlavorsCreateWithoutBerryInput } from "../inputs/BerryFlavorsCreateWithoutBerryInput";
import { BerryFlavorsWhereUniqueInput } from "../inputs/BerryFlavorsWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorsCreateNestedManyWithoutBerryInput", {})
export class BerryFlavorsCreateNestedManyWithoutBerryInput {
  @TypeGraphQL.Field(_type => [BerryFlavorsCreateWithoutBerryInput], {
    nullable: true
  })
  create?: BerryFlavorsCreateWithoutBerryInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsCreateOrConnectWithoutBerryInput], {
    nullable: true
  })
  connectOrCreate?: BerryFlavorsCreateOrConnectWithoutBerryInput[] | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorsCreateManyBerryInputEnvelope, {
    nullable: true
  })
  createMany?: BerryFlavorsCreateManyBerryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsWhereUniqueInput], {
    nullable: true
  })
  connect?: BerryFlavorsWhereUniqueInput[] | undefined;
}

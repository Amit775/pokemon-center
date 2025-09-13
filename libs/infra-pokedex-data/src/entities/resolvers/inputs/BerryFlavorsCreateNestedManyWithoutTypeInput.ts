import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsCreateManyTypeInputEnvelope } from "../inputs/BerryFlavorsCreateManyTypeInputEnvelope";
import { BerryFlavorsCreateOrConnectWithoutTypeInput } from "../inputs/BerryFlavorsCreateOrConnectWithoutTypeInput";
import { BerryFlavorsCreateWithoutTypeInput } from "../inputs/BerryFlavorsCreateWithoutTypeInput";
import { BerryFlavorsWhereUniqueInput } from "../inputs/BerryFlavorsWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorsCreateNestedManyWithoutTypeInput", {})
export class BerryFlavorsCreateNestedManyWithoutTypeInput {
  @TypeGraphQL.Field(_type => [BerryFlavorsCreateWithoutTypeInput], {
    nullable: true
  })
  create?: BerryFlavorsCreateWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsCreateOrConnectWithoutTypeInput], {
    nullable: true
  })
  connectOrCreate?: BerryFlavorsCreateOrConnectWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorsCreateManyTypeInputEnvelope, {
    nullable: true
  })
  createMany?: BerryFlavorsCreateManyTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsWhereUniqueInput], {
    nullable: true
  })
  connect?: BerryFlavorsWhereUniqueInput[] | undefined;
}

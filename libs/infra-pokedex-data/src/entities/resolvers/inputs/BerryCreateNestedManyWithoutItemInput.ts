import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryCreateManyItemInputEnvelope } from "../inputs/BerryCreateManyItemInputEnvelope";
import { BerryCreateOrConnectWithoutItemInput } from "../inputs/BerryCreateOrConnectWithoutItemInput";
import { BerryCreateWithoutItemInput } from "../inputs/BerryCreateWithoutItemInput";
import { BerryWhereUniqueInput } from "../inputs/BerryWhereUniqueInput";

@TypeGraphQL.InputType("BerryCreateNestedManyWithoutItemInput", {})
export class BerryCreateNestedManyWithoutItemInput {
  @TypeGraphQL.Field(_type => [BerryCreateWithoutItemInput], {
    nullable: true
  })
  create?: BerryCreateWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryCreateOrConnectWithoutItemInput], {
    nullable: true
  })
  connectOrCreate?: BerryCreateOrConnectWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => BerryCreateManyItemInputEnvelope, {
    nullable: true
  })
  createMany?: BerryCreateManyItemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BerryWhereUniqueInput], {
    nullable: true
  })
  connect?: BerryWhereUniqueInput[] | undefined;
}

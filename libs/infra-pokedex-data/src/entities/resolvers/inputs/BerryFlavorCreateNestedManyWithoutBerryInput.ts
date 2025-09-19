import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorCreateManyBerryInputEnvelope } from "../inputs/BerryFlavorCreateManyBerryInputEnvelope";
import { BerryFlavorCreateOrConnectWithoutBerryInput } from "../inputs/BerryFlavorCreateOrConnectWithoutBerryInput";
import { BerryFlavorCreateWithoutBerryInput } from "../inputs/BerryFlavorCreateWithoutBerryInput";
import { BerryFlavorWhereUniqueInput } from "../inputs/BerryFlavorWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorCreateNestedManyWithoutBerryInput", {})
export class BerryFlavorCreateNestedManyWithoutBerryInput {
  @TypeGraphQL.Field(_type => [BerryFlavorCreateWithoutBerryInput], {
    nullable: true
  })
  create?: BerryFlavorCreateWithoutBerryInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorCreateOrConnectWithoutBerryInput], {
    nullable: true
  })
  connectOrCreate?: BerryFlavorCreateOrConnectWithoutBerryInput[] | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorCreateManyBerryInputEnvelope, {
    nullable: true
  })
  createMany?: BerryFlavorCreateManyBerryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorWhereUniqueInput], {
    nullable: true
  })
  connect?: BerryFlavorWhereUniqueInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorCreateManyTypeInputEnvelope } from "../inputs/BerryFlavorCreateManyTypeInputEnvelope";
import { BerryFlavorCreateOrConnectWithoutTypeInput } from "../inputs/BerryFlavorCreateOrConnectWithoutTypeInput";
import { BerryFlavorCreateWithoutTypeInput } from "../inputs/BerryFlavorCreateWithoutTypeInput";
import { BerryFlavorWhereUniqueInput } from "../inputs/BerryFlavorWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorCreateNestedManyWithoutTypeInput", {})
export class BerryFlavorCreateNestedManyWithoutTypeInput {
  @TypeGraphQL.Field(_type => [BerryFlavorCreateWithoutTypeInput], {
    nullable: true
  })
  create?: BerryFlavorCreateWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorCreateOrConnectWithoutTypeInput], {
    nullable: true
  })
  connectOrCreate?: BerryFlavorCreateOrConnectWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorCreateManyTypeInputEnvelope, {
    nullable: true
  })
  createMany?: BerryFlavorCreateManyTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorWhereUniqueInput], {
    nullable: true
  })
  connect?: BerryFlavorWhereUniqueInput[] | undefined;
}

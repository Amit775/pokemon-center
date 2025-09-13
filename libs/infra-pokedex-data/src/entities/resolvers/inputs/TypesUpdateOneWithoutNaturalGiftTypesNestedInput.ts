import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateOrConnectWithoutNaturalGiftTypesInput } from "../inputs/TypesCreateOrConnectWithoutNaturalGiftTypesInput";
import { TypesCreateWithoutNaturalGiftTypesInput } from "../inputs/TypesCreateWithoutNaturalGiftTypesInput";
import { TypesUpdateToOneWithWhereWithoutNaturalGiftTypesInput } from "../inputs/TypesUpdateToOneWithWhereWithoutNaturalGiftTypesInput";
import { TypesUpsertWithoutNaturalGiftTypesInput } from "../inputs/TypesUpsertWithoutNaturalGiftTypesInput";
import { TypesWhereInput } from "../inputs/TypesWhereInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesUpdateOneWithoutNaturalGiftTypesNestedInput", {})
export class TypesUpdateOneWithoutNaturalGiftTypesNestedInput {
  @TypeGraphQL.Field(_type => TypesCreateWithoutNaturalGiftTypesInput, {
    nullable: true
  })
  create?: TypesCreateWithoutNaturalGiftTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypesCreateOrConnectWithoutNaturalGiftTypesInput, {
    nullable: true
  })
  connectOrCreate?: TypesCreateOrConnectWithoutNaturalGiftTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpsertWithoutNaturalGiftTypesInput, {
    nullable: true
  })
  upsert?: TypesUpsertWithoutNaturalGiftTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  disconnect?: TypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  delete?: TypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: true
  })
  connect?: TypesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateToOneWithWhereWithoutNaturalGiftTypesInput, {
    nullable: true
  })
  update?: TypesUpdateToOneWithWhereWithoutNaturalGiftTypesInput | undefined;
}

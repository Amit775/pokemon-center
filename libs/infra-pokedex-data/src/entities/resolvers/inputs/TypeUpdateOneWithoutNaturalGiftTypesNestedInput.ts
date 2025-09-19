import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateOrConnectWithoutNaturalGiftTypesInput } from "../inputs/TypeCreateOrConnectWithoutNaturalGiftTypesInput";
import { TypeCreateWithoutNaturalGiftTypesInput } from "../inputs/TypeCreateWithoutNaturalGiftTypesInput";
import { TypeUpdateToOneWithWhereWithoutNaturalGiftTypesInput } from "../inputs/TypeUpdateToOneWithWhereWithoutNaturalGiftTypesInput";
import { TypeUpsertWithoutNaturalGiftTypesInput } from "../inputs/TypeUpsertWithoutNaturalGiftTypesInput";
import { TypeWhereInput } from "../inputs/TypeWhereInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeUpdateOneWithoutNaturalGiftTypesNestedInput", {})
export class TypeUpdateOneWithoutNaturalGiftTypesNestedInput {
  @TypeGraphQL.Field(_type => TypeCreateWithoutNaturalGiftTypesInput, {
    nullable: true
  })
  create?: TypeCreateWithoutNaturalGiftTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypeCreateOrConnectWithoutNaturalGiftTypesInput, {
    nullable: true
  })
  connectOrCreate?: TypeCreateOrConnectWithoutNaturalGiftTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpsertWithoutNaturalGiftTypesInput, {
    nullable: true
  })
  upsert?: TypeUpsertWithoutNaturalGiftTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  disconnect?: TypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  delete?: TypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: true
  })
  connect?: TypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateToOneWithWhereWithoutNaturalGiftTypesInput, {
    nullable: true
  })
  update?: TypeUpdateToOneWithWhereWithoutNaturalGiftTypesInput | undefined;
}

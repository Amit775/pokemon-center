import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateOrConnectWithoutBerryFlavorsInput } from "../inputs/TypeCreateOrConnectWithoutBerryFlavorsInput";
import { TypeCreateWithoutBerryFlavorsInput } from "../inputs/TypeCreateWithoutBerryFlavorsInput";
import { TypeUpdateToOneWithWhereWithoutBerryFlavorsInput } from "../inputs/TypeUpdateToOneWithWhereWithoutBerryFlavorsInput";
import { TypeUpsertWithoutBerryFlavorsInput } from "../inputs/TypeUpsertWithoutBerryFlavorsInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeUpdateOneRequiredWithoutBerryFlavorsNestedInput", {})
export class TypeUpdateOneRequiredWithoutBerryFlavorsNestedInput {
  @TypeGraphQL.Field(_type => TypeCreateWithoutBerryFlavorsInput, {
    nullable: true
  })
  create?: TypeCreateWithoutBerryFlavorsInput | undefined;

  @TypeGraphQL.Field(_type => TypeCreateOrConnectWithoutBerryFlavorsInput, {
    nullable: true
  })
  connectOrCreate?: TypeCreateOrConnectWithoutBerryFlavorsInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpsertWithoutBerryFlavorsInput, {
    nullable: true
  })
  upsert?: TypeUpsertWithoutBerryFlavorsInput | undefined;

  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: true
  })
  connect?: TypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateToOneWithWhereWithoutBerryFlavorsInput, {
    nullable: true
  })
  update?: TypeUpdateToOneWithWhereWithoutBerryFlavorsInput | undefined;
}

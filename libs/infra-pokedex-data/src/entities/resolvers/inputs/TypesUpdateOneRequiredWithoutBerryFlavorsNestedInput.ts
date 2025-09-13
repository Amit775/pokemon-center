import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateOrConnectWithoutBerryFlavorsInput } from "../inputs/TypesCreateOrConnectWithoutBerryFlavorsInput";
import { TypesCreateWithoutBerryFlavorsInput } from "../inputs/TypesCreateWithoutBerryFlavorsInput";
import { TypesUpdateToOneWithWhereWithoutBerryFlavorsInput } from "../inputs/TypesUpdateToOneWithWhereWithoutBerryFlavorsInput";
import { TypesUpsertWithoutBerryFlavorsInput } from "../inputs/TypesUpsertWithoutBerryFlavorsInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput", {})
export class TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput {
  @TypeGraphQL.Field(_type => TypesCreateWithoutBerryFlavorsInput, {
    nullable: true
  })
  create?: TypesCreateWithoutBerryFlavorsInput | undefined;

  @TypeGraphQL.Field(_type => TypesCreateOrConnectWithoutBerryFlavorsInput, {
    nullable: true
  })
  connectOrCreate?: TypesCreateOrConnectWithoutBerryFlavorsInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpsertWithoutBerryFlavorsInput, {
    nullable: true
  })
  upsert?: TypesUpsertWithoutBerryFlavorsInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: true
  })
  connect?: TypesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateToOneWithWhereWithoutBerryFlavorsInput, {
    nullable: true
  })
  update?: TypesUpdateToOneWithWhereWithoutBerryFlavorsInput | undefined;
}

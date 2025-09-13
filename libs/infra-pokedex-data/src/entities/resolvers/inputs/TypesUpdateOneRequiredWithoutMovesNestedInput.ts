import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateOrConnectWithoutMovesInput } from "../inputs/TypesCreateOrConnectWithoutMovesInput";
import { TypesCreateWithoutMovesInput } from "../inputs/TypesCreateWithoutMovesInput";
import { TypesUpdateToOneWithWhereWithoutMovesInput } from "../inputs/TypesUpdateToOneWithWhereWithoutMovesInput";
import { TypesUpsertWithoutMovesInput } from "../inputs/TypesUpsertWithoutMovesInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesUpdateOneRequiredWithoutMovesNestedInput", {})
export class TypesUpdateOneRequiredWithoutMovesNestedInput {
  @TypeGraphQL.Field(_type => TypesCreateWithoutMovesInput, {
    nullable: true
  })
  create?: TypesCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => TypesCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: TypesCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpsertWithoutMovesInput, {
    nullable: true
  })
  upsert?: TypesUpsertWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: true
  })
  connect?: TypesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateToOneWithWhereWithoutMovesInput, {
    nullable: true
  })
  update?: TypesUpdateToOneWithWhereWithoutMovesInput | undefined;
}

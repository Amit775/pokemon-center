import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateOrConnectWithoutGameIndicesInput } from "../inputs/TypesCreateOrConnectWithoutGameIndicesInput";
import { TypesCreateWithoutGameIndicesInput } from "../inputs/TypesCreateWithoutGameIndicesInput";
import { TypesUpdateToOneWithWhereWithoutGameIndicesInput } from "../inputs/TypesUpdateToOneWithWhereWithoutGameIndicesInput";
import { TypesUpsertWithoutGameIndicesInput } from "../inputs/TypesUpsertWithoutGameIndicesInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesUpdateOneRequiredWithoutGameIndicesNestedInput", {})
export class TypesUpdateOneRequiredWithoutGameIndicesNestedInput {
  @TypeGraphQL.Field(_type => TypesCreateWithoutGameIndicesInput, {
    nullable: true
  })
  create?: TypesCreateWithoutGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => TypesCreateOrConnectWithoutGameIndicesInput, {
    nullable: true
  })
  connectOrCreate?: TypesCreateOrConnectWithoutGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpsertWithoutGameIndicesInput, {
    nullable: true
  })
  upsert?: TypesUpsertWithoutGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: true
  })
  connect?: TypesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateToOneWithWhereWithoutGameIndicesInput, {
    nullable: true
  })
  update?: TypesUpdateToOneWithWhereWithoutGameIndicesInput | undefined;
}

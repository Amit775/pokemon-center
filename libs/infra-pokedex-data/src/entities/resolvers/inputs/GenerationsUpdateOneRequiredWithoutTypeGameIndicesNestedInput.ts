import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateOrConnectWithoutTypeGameIndicesInput } from "../inputs/GenerationsCreateOrConnectWithoutTypeGameIndicesInput";
import { GenerationsCreateWithoutTypeGameIndicesInput } from "../inputs/GenerationsCreateWithoutTypeGameIndicesInput";
import { GenerationsUpdateToOneWithWhereWithoutTypeGameIndicesInput } from "../inputs/GenerationsUpdateToOneWithWhereWithoutTypeGameIndicesInput";
import { GenerationsUpsertWithoutTypeGameIndicesInput } from "../inputs/GenerationsUpsertWithoutTypeGameIndicesInput";
import { GenerationsWhereUniqueInput } from "../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.InputType("GenerationsUpdateOneRequiredWithoutTypeGameIndicesNestedInput", {})
export class GenerationsUpdateOneRequiredWithoutTypeGameIndicesNestedInput {
  @TypeGraphQL.Field(_type => GenerationsCreateWithoutTypeGameIndicesInput, {
    nullable: true
  })
  create?: GenerationsCreateWithoutTypeGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsCreateOrConnectWithoutTypeGameIndicesInput, {
    nullable: true
  })
  connectOrCreate?: GenerationsCreateOrConnectWithoutTypeGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpsertWithoutTypeGameIndicesInput, {
    nullable: true
  })
  upsert?: GenerationsUpsertWithoutTypeGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateToOneWithWhereWithoutTypeGameIndicesInput, {
    nullable: true
  })
  update?: GenerationsUpdateToOneWithWhereWithoutTypeGameIndicesInput | undefined;
}

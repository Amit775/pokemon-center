import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateOrConnectWithoutMovesInput } from "../inputs/GenerationsCreateOrConnectWithoutMovesInput";
import { GenerationsCreateWithoutMovesInput } from "../inputs/GenerationsCreateWithoutMovesInput";
import { GenerationsUpdateToOneWithWhereWithoutMovesInput } from "../inputs/GenerationsUpdateToOneWithWhereWithoutMovesInput";
import { GenerationsUpsertWithoutMovesInput } from "../inputs/GenerationsUpsertWithoutMovesInput";
import { GenerationsWhereUniqueInput } from "../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.InputType("GenerationsUpdateOneRequiredWithoutMovesNestedInput", {})
export class GenerationsUpdateOneRequiredWithoutMovesNestedInput {
  @TypeGraphQL.Field(_type => GenerationsCreateWithoutMovesInput, {
    nullable: true
  })
  create?: GenerationsCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: GenerationsCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpsertWithoutMovesInput, {
    nullable: true
  })
  upsert?: GenerationsUpsertWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateToOneWithWhereWithoutMovesInput, {
    nullable: true
  })
  update?: GenerationsUpdateToOneWithWhereWithoutMovesInput | undefined;
}

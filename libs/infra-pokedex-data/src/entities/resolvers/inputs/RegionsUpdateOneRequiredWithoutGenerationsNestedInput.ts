import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsCreateOrConnectWithoutGenerationsInput } from "../inputs/RegionsCreateOrConnectWithoutGenerationsInput";
import { RegionsCreateWithoutGenerationsInput } from "../inputs/RegionsCreateWithoutGenerationsInput";
import { RegionsUpdateToOneWithWhereWithoutGenerationsInput } from "../inputs/RegionsUpdateToOneWithWhereWithoutGenerationsInput";
import { RegionsUpsertWithoutGenerationsInput } from "../inputs/RegionsUpsertWithoutGenerationsInput";
import { RegionsWhereUniqueInput } from "../inputs/RegionsWhereUniqueInput";

@TypeGraphQL.InputType("RegionsUpdateOneRequiredWithoutGenerationsNestedInput", {})
export class RegionsUpdateOneRequiredWithoutGenerationsNestedInput {
  @TypeGraphQL.Field(_type => RegionsCreateWithoutGenerationsInput, {
    nullable: true
  })
  create?: RegionsCreateWithoutGenerationsInput | undefined;

  @TypeGraphQL.Field(_type => RegionsCreateOrConnectWithoutGenerationsInput, {
    nullable: true
  })
  connectOrCreate?: RegionsCreateOrConnectWithoutGenerationsInput | undefined;

  @TypeGraphQL.Field(_type => RegionsUpsertWithoutGenerationsInput, {
    nullable: true
  })
  upsert?: RegionsUpsertWithoutGenerationsInput | undefined;

  @TypeGraphQL.Field(_type => RegionsWhereUniqueInput, {
    nullable: true
  })
  connect?: RegionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => RegionsUpdateToOneWithWhereWithoutGenerationsInput, {
    nullable: true
  })
  update?: RegionsUpdateToOneWithWhereWithoutGenerationsInput | undefined;
}

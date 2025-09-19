import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateOrConnectWithoutGenerationsInput } from "../inputs/RegionCreateOrConnectWithoutGenerationsInput";
import { RegionCreateWithoutGenerationsInput } from "../inputs/RegionCreateWithoutGenerationsInput";
import { RegionUpdateToOneWithWhereWithoutGenerationsInput } from "../inputs/RegionUpdateToOneWithWhereWithoutGenerationsInput";
import { RegionUpsertWithoutGenerationsInput } from "../inputs/RegionUpsertWithoutGenerationsInput";
import { RegionWhereUniqueInput } from "../inputs/RegionWhereUniqueInput";

@TypeGraphQL.InputType("RegionUpdateOneRequiredWithoutGenerationsNestedInput", {})
export class RegionUpdateOneRequiredWithoutGenerationsNestedInput {
  @TypeGraphQL.Field(_type => RegionCreateWithoutGenerationsInput, {
    nullable: true
  })
  create?: RegionCreateWithoutGenerationsInput | undefined;

  @TypeGraphQL.Field(_type => RegionCreateOrConnectWithoutGenerationsInput, {
    nullable: true
  })
  connectOrCreate?: RegionCreateOrConnectWithoutGenerationsInput | undefined;

  @TypeGraphQL.Field(_type => RegionUpsertWithoutGenerationsInput, {
    nullable: true
  })
  upsert?: RegionUpsertWithoutGenerationsInput | undefined;

  @TypeGraphQL.Field(_type => RegionWhereUniqueInput, {
    nullable: true
  })
  connect?: RegionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => RegionUpdateToOneWithWhereWithoutGenerationsInput, {
    nullable: true
  })
  update?: RegionUpdateToOneWithWhereWithoutGenerationsInput | undefined;
}

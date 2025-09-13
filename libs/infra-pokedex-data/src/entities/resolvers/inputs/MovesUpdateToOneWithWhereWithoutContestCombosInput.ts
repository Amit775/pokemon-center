import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateWithoutContestCombosInput } from "../inputs/MovesUpdateWithoutContestCombosInput";
import { MovesWhereInput } from "../inputs/MovesWhereInput";

@TypeGraphQL.InputType("MovesUpdateToOneWithWhereWithoutContestCombosInput", {})
export class MovesUpdateToOneWithWhereWithoutContestCombosInput {
  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  where?: MovesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateWithoutContestCombosInput, {
    nullable: false
  })
  data!: MovesUpdateWithoutContestCombosInput;
}

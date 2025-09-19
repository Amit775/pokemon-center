import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorUpdateWithoutContestTypeInput } from "../inputs/BerryFlavorUpdateWithoutContestTypeInput";
import { BerryFlavorWhereUniqueInput } from "../inputs/BerryFlavorWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorUpdateWithWhereUniqueWithoutContestTypeInput", {})
export class BerryFlavorUpdateWithWhereUniqueWithoutContestTypeInput {
  @TypeGraphQL.Field(_type => BerryFlavorWhereUniqueInput, {
    nullable: false
  })
  where!: BerryFlavorWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryFlavorUpdateWithoutContestTypeInput, {
    nullable: false
  })
  data!: BerryFlavorUpdateWithoutContestTypeInput;
}

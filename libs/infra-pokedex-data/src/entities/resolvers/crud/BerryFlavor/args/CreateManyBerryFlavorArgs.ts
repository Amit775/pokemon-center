import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryFlavorCreateManyInput } from "../../../inputs/BerryFlavorCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBerryFlavorArgs {
  @TypeGraphQL.Field(_type => [BerryFlavorCreateManyInput], {
    nullable: false
  })
  data!: BerryFlavorCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

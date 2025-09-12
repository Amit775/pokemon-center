import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GendersUpdateInput } from "../../../inputs/GendersUpdateInput";
import { GendersWhereUniqueInput } from "../../../inputs/GendersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneGendersArgs {
  @TypeGraphQL.Field(_type => GendersUpdateInput, {
    nullable: false
  })
  data!: GendersUpdateInput;

  @TypeGraphQL.Field(_type => GendersWhereUniqueInput, {
    nullable: false
  })
  where!: GendersWhereUniqueInput;
}
